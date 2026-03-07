#!/bin/bash
# Ejecuta este script en tu Mac para hacer push con tu token.
# Uso: ./git-push-with-token.sh

set -e
cd "$(dirname "$0")"

echo "Cuando te lo pida, pega tu Personal Access Token (no tu contraseña de GitHub)."
read -sp "Token: " TOKEN
echo ""

if [ -z "$TOKEN" ]; then
  echo "No se ingresó token. Saliendo."
  exit 1
fi

git remote set-url origin "https://AdrianRMV:${TOKEN}@github.com/AdrianRMV/pacific-digital-studio.git"
git push -u origin main
git remote set-url origin "https://github.com/AdrianRMV/pacific-digital-studio.git"

echo "Push completado. El token ya no está guardado en el remote."
