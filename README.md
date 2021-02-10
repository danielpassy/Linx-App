# Linx-App
App criado para o desafio fullstack Linx juntamente a Edesoft


## Desafio

### Ferramentas 
- [ ] React
- [ ] servidor web em python (Django)
- [ ] Postgresql
- [ ] API https://openweathermap.org "5 Day / 3 Hour Forecast"

### Organização
- [ ] Publicar o arquivo no Github
- [ ] Publicar qualquer artefatos utilizados na implementação

### Funcionalidades
- [ ] Chamar API de previsão de tempo
- [ ] Escreve-los na tela de maneira clara
- [ ] Armazena-las em um banco de dados de tal forma que o usuário possa acessar seu histórico juntamente com dados de pesquisa

### Interface
- [ ] campo de pesquisa com nome das cidades
- [ ] Seleção dos dias de pesquisa
- [ ] Clicar sobre 1 dia, deve-se apresentar dados da previsão de maneira intuitiva
- [ ] Segunda área o histórico de pesquisas contendo os dados retornados

### README contendo
- [ ] Detalhamento do funcionamento
- [ ] Estrutura da aplicação
- [ ] Dependências
- [ ] Motivo pelo escolha da dependência
- [ ] Como executar a aplicação  

Neste primeiro momentos utilizaremos sessions


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
