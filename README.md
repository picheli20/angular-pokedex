#Pokedex With AnguarJS

This project was build using [Pokéapi](pokeapi.co), [Yeoman](http://yeoman.io/), [AngularJS](https://angularjs.org/), [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) and the comment's DB was made using [Parse](parse.com).

You can access a demo clicking [here](http://fabiopicheli.com/pokemon/).

##Dependencies

To run this project you need to have:

* NodeJS ([link](https://nodejs.org/))
* Bower ([link](http://bower.io/))
* Gulp ([link](http://gulpjs.com/))

##Setup the project

1.Install the depedencies above.

2.Clone the project.

```
git clone https://picheli20@bitbucket.org/picheli20/angular-pokedex.git

```

3.Go into the project folder

```
cd angular-pokedex

```

4.Install the gulp dependencies

```
sudo npm install

```
5.Install the bower dependencies

```
bower install

```

##Server

To start a local server go to project folder and run the command:


```
sudo gulp serve

```

Access [localhost:3000](localhost:3000) 

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