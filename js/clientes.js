function carregarClientes() {

	var clientes = [
	{nome: 'Arte Nobre Formaturas',	    site: 'http://artenobreeventos.com.br/',              			logo: 'ARTE_NOBRE.jpg'},
	{nome: 'COC',	                    site: 'http://coc.com.br/',	                                    logo: 'COC.jpg'},
	{nome: 'Clube Araraquarense',	    site: 'http://clubeararaquarense.com.br/site/',	                logo: 'ARARAQUARENSE.jpg'},
	{nome: 'Clube Náutico Araraquara',	site: 'http://clubenauticoararaquara.com/',	                    logo: 'NÁUTICO.jpg'},
	{nome: 'Cutrale',               	site: 'http://www.cutrale.com.br/',	                            logo: 'CUTRALE.jpg'},
	{nome: 'Embraer',               	site: 'http://www.embraer.com/br',                  	        logo: 'EMBRAER.jpg'},
	{nome: 'Heineken',               	site: 'http://www.heineken.com/br/agegateway?returnurl=%2f',	logo: 'HEINEKEN.jpg'},
	{nome: 'Itallian Hair Tech',	    site: 'http://www.itallianhairtech.com.br/',	                logo: 'ITALLIAN.jpg'},
	{nome: 'Lupo',	                    site: 'http://site.lupo.com.br/',	                            logo: 'LUPO.jpg'},
	{nome: 'Fazenda Salto Grande',	    site: 'http://www.hotelfazendasaltogrande.com.br/',	            logo: 'SALTO.jpg'},
	{nome: 'Santa Clara Eco Resort',	site: 'http://santaclaraecoresort.com.br/',	                    logo: 'SANTA_CLARA.jpg'},
	{nome: 'Senai',	                    site: 'http://www.portaldaindustria.com.br/senai/',	            logo: 'SENAI.jpg'},
	{nome: 'Sesi',	                    site: 'http://www.portaldaindustria.com.br/sesi/',	            logo: 'SESI.jpg'},
	{nome: 'Sesc',	                    site: 'http://www.sesc.com.br/',	                            logo: 'SESC.jpg'},
	{nome: 'Unesp',	                    site: 'http://www.unesp.br/',	                                logo: 'UNESP.jpg'},
	{nome: 'Unimed',	                site: 'http://www.unimed.coop.br/pct/index.jsp?cd_canal=49146',	logo: 'UNIMED.jpg'}];
	
	var ul = document.getElementById('clint-slider');
	
	for (var c in clientes) {
		var li = document.createElement("li"),
		a = document.createElement("a"),
		img = document.createElement("img");
		a.href = clientes[c].site;
		a.target = "_blank";
		img.src = 'images/clients/' + clientes[c].logo;
		img.alt = img.title = clientes[c].nome;
		a.appendChild(img);
		li.appendChild(a);
		ul.appendChild(li);
	}

}