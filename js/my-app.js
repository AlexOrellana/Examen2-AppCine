// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'CoffeeApp',
	dialog: {
		title: 'CoffeeApp',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
		  }
		  ,
		{
		path: '/info 2/',
    	url: 'info 2.html',
    	name: 'info 2',
  		},
		{
		  path: '/info 3/',
		  url: 'info 3.html',
		  name: 'info 3',
		},
		{
		path: '/info 4/',
    	url: 'info 4.html',
    	name: 'info 4',
  		},
		{
		  path: '/info 5/',
		  url: 'info 5.html',
		  name: 'info 5',
		},
		{
		path: '/info 6/',
    	url: 'info 6.html',
    	name: 'info 6',
  		},
		{
		  path: '/Perfil/',
		  url: 'Perfil.html',
		  name: 'Perfil',
		}
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnComprar').on('click', function () {
  app.dialog.alert('¡ Tu compra fue realizada correctamente !');
});


$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    app.dialog.alert('¡ Tu compra fue realizada correctamente !');
  });
});


$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.dialog.alert('¡ Bienvenido a Coffee Shop !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});







 

