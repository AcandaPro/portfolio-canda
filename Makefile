# Chemin du fichier de conf nginx source et destination
NGINX_SRC=nginx/default.conf
NGINX_DEST=frontend/default.conf

# Cible principale
all: build

# Copie le fichier nginx
prepare:
	@echo "🔄 Préparation du fichier NGINX pour le frontend..."
	cp $(NGINX_SRC) $(NGINX_DEST)
	@echo "✅ Fichier copié dans $(NGINX_DEST)"

# Lance le build Docker avec la préparation
build: prepare
	@echo "🚀 Build Docker..."
	docker-compose up --build

# Stoppe et nettoie tout
clean:
	@echo "🧹 Arrêt et nettoyage..."
	docker-compose down --volumes --remove-orphans

# Juste lancer sans rebuild
start:
	@echo "▶️ Lancement Docker sans rebuild..."
	docker-compose up

# Stoppe le projet
stop:
	@echo "⏹️ Arrêt Docker..."
	docker-compose down
