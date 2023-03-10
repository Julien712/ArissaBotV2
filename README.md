# 🤖 ArissaBotV2

Mise à jour de mon bot discord de musique vers `discord.js V14` avec ajout des commandes slash !

# 🚀 Installation

## Élements requis

1. Créer un bot sur le [Discord Developer Portal](https://discordapp.com/developers/applications) et récupérer le token et ajouter le sur votre serveur.

2. Télécharger et installer [nodejs](https://nodejs.org/en/download/) version 18.15 LTS

3. Ouvrez et éditez le fichier `config.js` situé dans le dossier principal.

```js
module.exports = {
    app: {
        token: 'TOKEN',
        global: true,
        guild: 'ID_serveur_discord'
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
```
4. Exécutez ensuite le fichier `install.bat` pour télécharger  les fichiers nécessaires pour le fonctionnement du bot

5. Il ne vous reste plus qu'à exécuter le fichier `Start.bat` et vous pourrez profiter du bot ! 


# 📝 Descriptions des options de configuration

- `app/token`, Définit le token du bot disponible sur le site [Discord Developers](https://discordapp.com/developers/applications)
- `app/global`, Définit si les commandes fonctionneront sur tous les serveurs ou sur un seul (si elles sont globales, elles peuvent prendre jusqu'à une heure pour s'afficher)
- `app/guild`, L'ID du serveur discord dans lequel la commande slash sera chargée (Fonctionne que si global est défini sur false)

- `opt/DJ/enabled`, Définit si le mode DJ doit être activé ou non
- `opt/DJ/roleName`, Définit le nom du rôle de DJ à utiliser
- `opt/DJ/commands`, Définit la liste des commandes réservées aux membres ayant le rôle de DJ

(Pour les utilisateurs avancés, si vous ne connaissez pas n'y toucher pas ou le bot pourrait ne pas/plus fonctionner)

- `opt/maxVol`, Définit le volume maximum que les utilisateurs peuvent choisir
- `opt/leaveOnEnd`, Définit si le bot quitte le salon à la fin de la file d'attente
- `opt/loopMessage`, Définit si le message indiquant qu'une musique est jouée doit être envoyé lorsqu'elle est en boucle
- `opt/spotifyBridge`, Permet de récupérer les musiques / playlists de spotify et les recherche sur youtube et les joue (fortement recommandé)
- `opt/defaultvolume`, Définit le volume par défaut du bot lors du démarrage
- `opt/discordPlayer`, options utilisées par discord-player

# 👨‍💻  Support

En cas de problèmes contactez moi sur discord : `.Warkzent#6969`