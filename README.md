# robotube
 
  Robo para criar e postar vídeo no Youtube

# git comando

    # Switch para uma nova branch
    $ git checkout -b google-search 


    $ git diff
    $ git add -A
    $ git commit -m "descrição para o commit"

    # fazer o merge do user-input para original
    $ git push origin user-input

    $ git status




# node

    $ node install googleapis

    $ node index.js



# Customisa search API

    # lista de parametros que pode ser utilizado
    - https://developers.google.com/apis-explorer/#p/customsearch/v1/search.cse.list

    - em image.js

        ...
        async function fetchGoogleAndReturnImagesLinks(query) {
            const response = await customSearch.cse.list({
            auth: googleSearchCredentials.apiKey,
            cx: googleSearchCredentials.searchEngineId,
            q: query,
            searchType: 'image',
            imgSize: 'huge', // retorna imagem de alta resolucao 
            num: 2
            })
        ...