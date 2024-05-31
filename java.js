document.getElementById('pesquisaCep').addEventListener("click", async function PesquisarCEP(){
 
    let cep = document.getElementById('cep').value;
    const apiViaCep = 'https://viacep.com.br/ws/' +cep+ '/json/';
    const resCep = await fetch(apiViaCep);
    const dadosCep = await resCep.json();
 
    if (dadosCep.erro == true)
        alert("CEP invalido");
    else
    document.getElementById('rua').value = `${dadosCep.logradouro} ${dadosCep.bairro} ${dadosCep.localidade} ${dadosCep.uf}`;
})
 
apiKey = "830c133eb0e50b2855f99e9f998724d3"
apiImagem = "https://source.unsplash.com/1600x900/?";
apiBandeira1 = "https://flagsapi.com/"
apiBandeira2 = "/flat/64.png"
const cidade = document.querySelector("input[name='cidade']").value
 
document.getElementById('imgCidade').setAttribute('src',apiImagem+cidade)
 
tempElement = document.querySelector('#temperatura') // # é para pegar pelo id
climaIconElement = document.querySelector("#icone")
dadosTemp = document.querySelector(".dadosTemperatura") // . é o nome da div
dadosLog = document.querySelector(".dadosLougradouro")
 
document.querySelector('#verificarClima').addEventListener("click", async function (){
    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`
    const resultado = await fetch(apiClimaURL)
    const dadosClima = await resultado.json()
    if (dadosClima.cod === "404"){
        alert("cidade Inválida")
        return
    }

    document.getElementById('temperatura').innerText = parseFloat(dadosClima.main.temp)+ 'º'; 
    document.getElementById('humidade').innerText = parseFloat(dadosClima.main.humidity)+ '%';
    document.getElementById('vento').innerText = parseFloat(dadosClima.wind.speed)+'km/h';
    document.getElementById('tempo').innerText = dadosClima.weather[0].description;

    document.getElementById('imgPais').setAttribute('src',apiBandeira1+dadosClima.sys.country);

    document.getElementById("cidadeTempo").innerText = cidade;
    document.getElementById("icone").setAttribute("src",`http://openweathermap.org/img/wn/${apiBandeira1+dadosClima+sys.country+apiBandeira2}`);
    document.getElementById('imgPais').setAttribute('src', apiBandeira1+dadosClima.sys.country+apiBandeira2)
    document.getElementById('imgCidade').setAttribute('src',apiImagem+cidade);
})
 
