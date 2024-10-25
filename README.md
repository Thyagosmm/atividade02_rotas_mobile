# atividade02_rotas_mobile

# --> Inicia normalmente o expo

npx expo start

# --> Inicia o expo limpando o cache

npx expo start -c

# --> Inicia o json server

json-server --watch db.json --port 3000

# --> Inicia o expo criando um mesmo ambiente anonimo para mobile e desktop

npx expo start --tunnel
