$(document).ready(function() {
    
    $('.banner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $('.vitrina').slick({
       arrows: true,
       dots: false,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 2000,
       centerMode: true,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    let url = 'https://corebiz-test.herokuapp.com/api/v1/products';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<div><img src =${data[i].imageUrl}><div><h3>${data[i].productName}</h3><h5>por R$ ${data[i].price}</h5><button onClick={Sumar} class=boton-compra>Comprar</button></div></div>`
            }
            document.getElementById('data').innerHTML = body
            //console.log(body)
        }


    $(".icono-hamburger").click(function(){
        $(".contenido-oculto").fadeIn();
    });

    $(".cerrar").click(function(){
        $(".contenido-oculto").fadeOut();
    })

  });

  d = $(document);
  d.ready(iniciar);
  function iniciar() {
      b = $(".enviar");
      b.click(mensaje);
  }
  function mensaje() {
      y = $("#nombre").val();
      x = $("#email").val();
      alert(y);
      alert(x);
  }

  let url = 'https://corebiz-test.herokuapp.com/api/v1/products'
  fetch(url)
  .then(obtener => obtener.json())
  .then(data => console.log(data))

  const mostrar = (data) => {
    let body = ''
    for (let i = 0; i<data.lenght; i++) {
        body += `<tr><td>${data[i].productName}</td></tr>`
        console.log(data.productName)
    }
}

mostrar();
