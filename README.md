# Linx-App
App criado para o desafio fullstack Linx juntamente a Edesoft


## Requisitos

### Ferramentas 
- [x] React
- [x] servidor web em python (Django)
- [x] Postgresql
- [x] API https://openweathermap.org "5 Day / 3 Hour Forecast"

### Organização
- [x] Publicar o arquivo no Github
- [ ] Publicar qualquer artefatos utilizados na implementação

### Funcionalidades
- [x] Chamar API de previsão de tempo
- [x] Escreve-los na tela de maneira clara
- [x] Armazena-las em um banco de dados de tal forma que o usuário possa acessar seu histórico juntamente com dados de pesquisa

### Interface
- [x] campo de pesquisa com nome das cidades
- [x] Seleção dos dias de pesquisa
- [x] Clicar sobre 1 dia, deve-se apresentar dados da previsão de maneira intuitiva
- [x] Segunda área o histórico de pesquisas contendo os dados retornados

### README contendo
- [X] Detalhamento do funcionamento
- [X] Estrutura da aplicação
- [X] Dependências
- [X] Motivo pelo escolha da dependência
- [X] Como executar a aplicação  

Neste primeiro momentos utilizaremos sessions


## Estrutura da aplicação
A aplicação é constituída de duas aplicações individuais:<br>
    - Backend construído em Django que serve provem serviços REST e os recursos REACT<br>
    - Front construído em React, criado com Create-react-app<br>
O back possui apenas 2 ends points operantes:
    - POST - /api/v1/get_weather/ - Requisição de dados de previsão de tempo para uma cidade. É necessário inserir a chave "city" contendo a cidade a qual deseja-se saber a previsão do tempo.<br>
    - GET - /api/v1/history/ - Requisição de histórico de requisição de dados de previsão do tempo.<br>
Há um terceiro End point utilizado para requisitar CSRF token caso a funcionalidade de login venha ser implementada <br>
As variáveis de ambientes se encontram na pasta \Linx-App\backend\linx\.env, é recomendado que tais variáveis sejam 
<br>
O Frontend é um SPA responsivo com apenas duas páginas: <br>
    - /, onde o usuário pode requisitar a previsão do tempo e verificar a previsão do tempo para até o quinto dia.
    - /historico, onde pode acessar o histórico de buscas que realizou
<br>
Sugere-se a utilização de NGINX e GUNICORN para o deploy do backend desta aplicação. <br>


## Detalhamento do Funcionamento

O aplicativo não possui funcionalidade de login, dado que previsão do tempo é um serviço comumente encontrado na internet, a necessidade de registro poderia aumentar muito o bounce rate<br>
Para contornar este problema, utiliza-se cookies para identificar o usuário <br>
Na medida que o usuário entrar na página principal, um cookie é adicionado ao seu browser e assim pode-se identifica-lo posteriormente. <br>
Quando o usuário faz requisição de dados de previsão do tempo, o servidor realiza a requisição de API para o serviço de openweathermap, exclusivamente para cidades do Brasil para melhorar a experiência do usuário. Caso a requisição seja bem sucedida, parte dos dados é salvo, uma entrada por ida, e é enviada ao frontend.<br>
O front end não revela todas as informações pois muitas destas não são de interesse da maioria das personas do site <br> 

## Dependências
### React
react-router
bootstrap
axios
DatePicker

react-router facilita a organização de uma single page-app em diversas rotas, sendo de fácil uso e implementação, melhorando a experiência do usuário e desenvolvedor<br>
bootstrap é uma biblioteca que facilita a criação de páginas responsivas <br>
axios é utilizado apenas para tornar chamadas de api mais facilmente legíveis <br>
DatePicker é um componente para criar um belo selecionador de datas<br>


### Django
As dependências estão apontadas em \Linx-App\backend\requirements, sendo divididas em dependências d edesenvolvimento e de produção.
Para desenvolvimeto, temos
```py
djangorestframework
psycopg2-binary
django-cors-header
Sphinx
python-dotenv
requests
requests-toolbelt
black
typing-extensions
mypy-extensions
```
Para produção
```
Django==3.1.6d
djangorestframework==3.12.2
psycopg2-binary==2.8.6
django-cors-headers==3.7.0
gunicorn==20.0.4
requests==2.25.1
requests-toolbelt==0.9.1
```


## Instalando o servidor back end localmente 

Clone o repositório
```bash
git clone https://github.com/danielpassy/Linx-App.git
```
Acesse a pasta backend
```bash
cd Linx-App/backend
```

Crie um ambiente virtual
```bash
python3 -m venv venv
```
Inicialize o ambiente virtual
```bash
$ on Linux
source ./venv/bin/activate
$ On Windows
/venv/Scripts/activate.exe
```
Instale as dependencias
```bash
$ dependencias de desenvolvimento
pip install ./requirements/development.txt
```

Configure as variáveis de ambiente
```bash
$ em desenvolvimento, configure .env, dentro da pasta linx
cd ./linx/.env
```

Aplique as migrações
```python
python ./manage.py migrate
```
Colete os arquivos estaticos
```python
python ./manage.py collectstatic
```

Inicie o servidor de desenvolvimento
```python
python ./manage.py runserver
```

## Instalando o servidor back end localmente 

Após clonado o repositório no Instalando o servidor back end localmente, acesse a pasta frontend
```bash
cd Linx-App/frontend
```
Instale as dependências
```bash
npm install
```
