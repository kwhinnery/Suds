#!/bin/sh
cp -R "$WEB_SRC_ROOT/" "$TARGET_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH/"
for f in `find "$TARGET_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH" -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.a' `; do rm -rf "$f"; done
/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin/iphoneos-optimize "$TARGET_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH/"
find "$TARGET_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH/" -type d -empty -delete

