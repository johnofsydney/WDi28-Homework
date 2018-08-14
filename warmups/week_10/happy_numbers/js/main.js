const happyNums = {

  list: [],

  squareSum: function( num ){
    const strNum = num.toString().split('');

    let sum = 0;

    strNum.forEach( function( value ){
      // console.log(value);
      sum += value * value;
    });
    return sum;
  },

  logic: function( num ){
    let steps = [ num ];
    while( steps.length < 10 ){
      let lastIndex = steps[ steps.length - 1 ];
      if( lastIndex !== 1 ){
        steps.push( this.squareSum( lastIndex ));
      } else if( lastIndex > 1 && steps.indexof( lastIndex ) > 0 ){
        return;
      } else {
        this.list.push( num );
        return;
      }
    }
  },

  answer: function( num ){
    for( let i = 1; this.list.length < num; i++ ){
      this.logic(i);
    }
    console.log( this.list );
    return this.list;
  }

};

happyNums.answer( 10 );























































// const happyNums = {
//
//   list: [],
//
//   squareSum: function( num ){
//     const strNum = num.toString().split('');
//
//     let sum = 0;
//
//     strNum.forEach( function( index ){
//       // console.log(index);
//       sum += index * index;
//     });
//     return sum;
//   },
//
//   logic: function( num ){
//
//     steps = [ num ];
//
//      while( steps.length < 10 ){
//        let lastIndex = steps[ steps.length - 1 ];
//        if( lastIndex !== 1 ){
//          steps.push( this.squareSum( lastIndex ) );
//        } else if ( lastIndex > 1 && steps.indexOf( lastIndex ) > 0 ){
//          return;
//        } else {
//          this.list.push( num );
//          return;
//        }
//      }
//   },
//
//   answer: function( num ){
//     for( let i = 1; this.list.length < num; i++ ){
//       this.logic( i );
//     }
//     console.log( this.list );
//     return this.list;
//   }
//
// };
//
// happyNums.answer( 10 );
