ROOT_UID=0

if [ "$UID" -eq "$ROOT_UID" ]; then
  echo "Installing lightdm theme"
  cp -r minD/ /usr/share/lightdm-webkit/themes/
else
  echo "Need root user permissions"
fi

