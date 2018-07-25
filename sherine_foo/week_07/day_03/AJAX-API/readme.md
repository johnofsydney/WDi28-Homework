https://api.nasa.gov/planetary/apod?api_key=6Bi7U3g0Zo4M6J7jGDz5gCzLJcdKQi5aa5N6fj7E

EPIC image photos link
https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png

Site Name	Archive	Collection	Year	Month	Day	Image Type	File Name

JSON data

attitude_quaternions:
{q0: -0.8362, q1: 0.50794, q2: 0.01823, q3: 0.20599}
caption:
"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
centroid_coordinates:
{lat: 13.798376, lon: 109.169853}
coords:
{centroid_coordinates: {…}, dscovr_j2000_position: {…}, lunar_j2000_position: {…}, sun_j2000_position: {…}, attitude_quaternions: {…}}
date:
"2018-07-23 04:34:53"
dscovr_j2000_position:
{x: -771952.220081, y: 1344964.525497, z: 382950.291468}
identifier:
"20180723043942"
image:
"epic_1b_20180723043942"
lunar_j2000_position:
{x: -142121.153482, y: -372825.031322, z: 30843.071414}
sun_j2000_position:
{x: -76107726.618399, y: 120696823.20003, z: 52323077.374433}
version:
"02"


//
// var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');
//
// $.ajax('https://epic.gsfc.nasa.gov/api/natural', {
//         success : function(iDataArr, stat, xhr) {
//             // do something with the list
//         }
//     });

$month = '08';
 $day = 21;
 $year = '2017';

 $metadata = "https://epic.gsfc.nasa.gov/api/natural/date/{$year}-{$month}-{$day}";
 $meta = file_get_contents($metadata);   // get the metadata for that date and collection
 $arr = json_decode($meta);  // decode the metadata

 foreach($arr as $item) {
     $name = $item->image . '.png';
     $archive = "https://epic.gsfc.nasa.gov/archive/natural/{$year}/{$month}/{$day}/png/";

     $source = $archive . $name;
     $destination = '/path/to/downloads/' . $name;

     copy($source, $destination);    // download and copy the image
 }
