#!/bin/bash
# write array from files in directory

# delete current index
rm ./index.html

# create an array with all the files in this folder
blogposts=(blogposts/*)

# create website path variable
WP="technomad.media/"

# open template
echo "<html>" >> index.html
echo "  <head>" >> index.html
echo "  </head>" >> index.html
echo "  <body>" >> index.html

# iterate over array 
for each in "${blogposts[@]}" ; do
  echo "    <a href=\"https://$WP$each\">$each</a>" >> index.html
done

# close template
echo "  </body>" >> index.html
echo "</html>" >> index.html

