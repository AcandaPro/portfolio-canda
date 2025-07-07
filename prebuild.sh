#!/bin/bash

# Crée le fichier nginx pour le frontend à partir du fichier maître
echo "🔄 Copie du fichier NGINX maître vers le frontend..."

cp ./nginx/default.conf ./frontend/default.conf

if [ $? -eq 0 ]; then
  echo "✅ Copie réussie : ./frontend/default.conf"
else
  echo "❌ Erreur lors de la copie."
  exit 1
fi
