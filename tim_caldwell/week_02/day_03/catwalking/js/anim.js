////////////////////////////////////////////////////////////////////////////////
// ANIM.JS -- ANIMATION FRAMEWORK BY TIM CALDWELL HTTP://TIMCALDWELL.SOLUTIONS
////////////////////////////////////////////////////////////////////////////////

const Animation = function () {
  return {
    objects: [],
    currentTimeStamp: 0,
    addObject: function($name='object', $type='div', $initialLocation={x:0, y:0}, $startFrame=0, $endFrame=-1) {
      this.objects.push(
        {
          name: $name,
          type: $type,
          initilLocation: $initialLocation,
          startFrame: $startFrame,
          endFrame: $endFrame,
          isAddedToDOM: false,
          DOMObj: document.createElement( $type ),
          keyFrames: [],
          addKeyFrame: function ($timeStamp, $location={x:0,y:0}, $newProperties) {
            // add new keyframe
            this.keyFrames.push({
              timeStamp: $timeStamp,
              location: $location,
              properties: $newProperties //object with key/values of properties to apply
            });

            //make sure keyframes are sorted by timestamp;
            this.keyFrames.sort( function(a,b) { return a.timeStamp - b.timeStamp })
          }
          // end obj.addKeyFrame
        }
      )
    },
    // end addObject
    play: function() {
      // play funcitonality here
    },
    // end play
    setTimeStamp: function( $timestamp ) {
      this.currentTimeStamp = $timestamp;
    },
    interp: function( a, b, dist ) {
      return a += ( b - a ) * dist;
    },
    // end setTimeStamp
    updateFrame: function ( $timestamp ) {
      // main function that sets location.attributes of all objects.
      for (let i = 0; i < this.objects.length; i++ ){
        const curObj = this.objects[i];
        if (!curObj.isAddedToDOM) {
          document.body.appendChild( curObj.DOMObj );
        }

        // get keyframes for the object on either side of the current timestamp
        let keyFrameBefore = {timeStamp: 0}, keyFrameAfter = {timeStamp: 0};

        for ( let j = 0; j < curObj.keyFrames.length; j++ ){
          curKeyFrame = curObj.keyFrames[j];
          if (curKeyFrame.timeStamp < $timestamp && curKeyFrame.timeStamp >= keyFrameBefore.timeStamp ) {
            keyFrameBefore = curKeyFrame;
          }

          if (curKeyFrame.timeStamp > $timestamp ) {
            keyFrameAfter = curKeyFrame;
            break;
          }

          if (curKeyFrame.timeStamp === $timestamp ) {
            keyFrameBefore = curKeyFrame;
            keyFrameAfter = curKeyFrame;
            break;
          }
        }

        // interpolate between keyFrames
        if ( keyFrameBefore === keyFrameAfter ) {
          // we're on a keyframe, no need to interp.
          console.log ('keyframe for', curObj.name,'is the same');
        } else {
          // interp
          let durationBetween = keyFrameAfter.timeStamp - keyFrameBefore.timeStamp;
          let pcDif = $timestamp / durationBetween; // should return a float between 0 & 1.
          console.log( keyFrameBefore );
          newX = this.interp( keyFrameBefore.location.x, keyFrameAfter.location.x, pcDif )
          newY = this.interp( keyFrameBefore.location.y, keyFrameAfter.location.y, pcDif )

          console.log(newX,newY);

          for ( let prop in keyFrameAfter.properties ) {
            let a = keyFrameAfter.properties[ prop ];
            if ( keyFrameBefore.properties.hasOwnProperty( prop ) ) {
              let b = keyFrameBefore.properties[ prop ];

              newVal = this.interp( a, b, pcDif );

              curObj.DOMObj[ prop ] = newVal;
            }
          }
        }
      }
    }
    // end processing all objects
  }
}
