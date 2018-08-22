// // test API connection
// $.getJSON('https://slack.com/api/api.test?').done((result) => { console.log(result) })

// // get groups
// $.getJSON('https://slack.com/api/groups.list', { token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765' }).done((result) => { console.log(result); })

// // get history from wdi-sydney-wdi28
// $.getJSON('https://slack.com/api/groups.history', { token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765', channel: "G9VQ942AX" }).done((result) => { console.log(result); })

// // post a message to the channel
// $.post('https://slack.com/api/chat.postMessage', { token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765', channel: "G9VQ942AX", text: "Hello World!" }).done((result) => { console.log(result); })

const app = {
  users: {},
  addUser: function(user) {
    this.users[user.id] = {
      imageUrl: user.profile.image_48,
      displayName: user.profile.real_name_normalized
    };
  },
  latestMsgTs: 0,
  interval: null
}

const updateGroups = function( result ) {
  if (result.ok) {
    // success, lets get data
    result.groups.forEach( (g) => {
      options = {
        class: 'group_option',
        value: g.id,
        text: g.name
      }
      $('#group').append( $('<option>', options) )
    })
  } else {
    // failed to get groups!! :(
  }
};

const getGroups = function() {
  // get groups
  $.getJSON(
    'https://slack.com/api/groups.list', 
    { 
      token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765' 
    }
  ).done(updateGroups);
}

const fillChannelHistory = function( result ) {
  if (result.ok) {
    // we got messages!!
    // store timestamp of latest message
    app.latestMsgTs = _(result.messages).max((m) => { return m.ts }).ts
    
    // create messages in DOM
    result.messages.reverse().forEach((m) => {
      haveUserData = getUserInfo(m.user);

      let options = {
        class: 'chat_message',
        id: m.user,
      }

      let $msg = $('<div>', options );
      let $img = $('<img>', { class: 'avatar' })
      let $avatar = $('<div>').append($img)
      let $displayName = $('<div>', { class: 'displayName' })
      let $nameAndText = $('<div>').append($displayName)
      $nameAndText.append( $('<div>', {text: m.text}) );
      
      if (haveUserData) {
        $img.attr('src', app.users[m.user].imageUrl );
        $displayName.text( app.users[m.user].displayName );
      }
      
      $msg.append( $avatar ).append( $nameAndText );
      $('#channel_history').append( $msg );
    })
  }
  else {
    // whoops something broke
  }
}

const updateUserDisplay = function( userID ) {
  userInfo = app.users[userID];
  $(`#${userID} .avatar`).each( function() {
    $(this).attr('src', userInfo.imageUrl);
  });

  $(`#${userID} .displayName`).each(function () {
    $(this).text(userInfo.displayName );
  });
}

const storeUserInfo = function( result ) {
  if (result.ok) {
    // got user info
    app.addUser(result.user);
    updateUserDisplay(result.user.id);
  } else {
    // whoops no info
  }
}

const getUserInfo = function( userID ) {
  if ( app.users[userID] === undefined ) {
    app.users[userID] = 'fetching'
    options = {
      token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765',
      user: userID
    };

    $.getJSON('https://slack.com/api/users.info', options).done(storeUserInfo);

    return false;
  }
  else if (app.users[userID] === 'fetching') {
    return false;
  }
  else {
    return true;
  }
}


const getGroupHistory = function( groupID ) {
  // console.log( groupID );
  const options = {
    token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765',
    channel: groupID,
    count: 50,
    oldest: +app.latestMsgTs
  };

  $.getJSON('https://slack.com/api/groups.history', options ).done(fillChannelHistory);
}

const messageDone = function( result ) {
  if (result.ok) {
    // woot success
    $('#message').val('');

    getGroupHistory(result.channel);
  }
  else {
    // doh failed
  }
}

const postSlackMessage = function( groupID, text ) {
  const options = {
    token: 'xoxp-3171645816-359232436615-404624153765-44ca5ce2a76157aa28c1605283af0765',
    channel: groupID,
    text: text
  }

  $.post('https://slack.com/api/chat.postMessage', options).done(messageDone)
}


$(document).ready(() => {
  $('#slacky_form').on('submit', (e) => {
    e.preventDefault();
    // post a message to slack and reset form
    text =  $('#message').val();
    group = $('#group').val();

    if (text === '' || text === undefined) {
      //nope, don't post a blank message
    } 
    else {
      postSlackMessage(group, text);
    }
  });

  $('#group').on('change', function (e) {
    // get the new groups messages
    console.log('changed group selector');
    clearInterval(app.interval)
    app.interval = setInterval(getGroupHistory, 60 * 1000, this.value)
    getGroupHistory( this.value );
  })

  getGroups();
})