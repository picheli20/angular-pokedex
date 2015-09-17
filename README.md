#Pokedex With AnguarJS

This project was build using [Pokéapi](pokeapi.co), [Yeoman](http://yeoman.io/), [AngularJS](https://angularjs.org/), [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) and the comment's DB was made using [Parse](parse.com).

You can access a demo clicking [here](http://picheli.com.br/pokemon).

##Requirements

* NodeJS ([link](https://nodejs.org/))
* Bower ([link](http://bower.io/))
* Gulp ([link](http://gulpjs.com/))

##Installation

After the installation of all requirements tools, you need to download all the NodeJS dependencies running this command:

```
sudo npm install

```

And all the bower dependencies.

```
bower install

```

##Server

To start a local server go to main folder and run the command:


```
sudo gulp serve

```

##Testing

This project has a e2e test, you can run the test with this command:

```
sudo gulp test

```

##Building

To build a server's deploy version, just run the above code and the deploy version will be available on /dist folder.

```
sudo gulp test

```