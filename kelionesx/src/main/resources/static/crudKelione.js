class Kelione {
	
	constructor ( kelione ) {
		this.konstruktoriausSeteris( kelione );
	}
	konstruktoriausSeteris( kelione ) {
		this.id = kelione.id;
		this.pav = kelione.pav;
		this.apras = kelione.apras; 
		this.flag_poilsines = kelione.flagPoilsines;
		this.flag_pazintines = kelione.flagPazintines;
		this.flag_viskas_isk = kelione.flagViskasIsk;
		this.kaina = kelione.kaina;
		this.trukme_val = kelione.trukmeVal;
	}
	rezultatoEilute() {
		this.checked1 = "";
		this.checked2 = "";
		this.checked3 = "";
		this.res_eilute = "";
		if (this.flag_poilsines == 1){
			this.checked1 += "&check;";
		} else {
			this.checked1 += "&cross;";
		}
		if (this.flag_pazintines == 1){
			this.checked2 += "&check;";
		} else {
			this.checked2 += "&cross;";
		}
		if (this.flag_viskas_isk == 1){
			this.checked3 += "&check;";
		} else {
			this.checked3 += "&cross;";
		}
		this.res_eilute += '<tr data-id="' + this.id  
			+ '" data-pav="' + this.pav 
			+ '" data-apras="' + this.apras 
			+ '" data-flagpoilsines="' + this.flag_poilsines 
			+ '" data-flagpazintines="' + this.flag_pazintines 
			+ '" data-flagviskasisk="' + this.flag_viskas_isk
			+ '" data-kaina="' + this.kaina 
			+ '" data-trukmeval="' + this.trukme_val 
			+ '">'
			+ '<td>' + this.id + '</td>' 
			+ '<td>' + this.pav + '</td>'
			+ '<td>' + this.apras + '</td>'
			+ '<td>'
			+ '<div>' + this.checked1 + '</div>'
			+ '</td>'
			+ '<td>' 
			+ '<div>' + this.checked2 + '</div>'
			+ '</td>'
			+ '<td>'
			+ '<div>' + this.checked3 + '</div>'
			+ '</td>'
			+ '<td>' + this.kaina + '</td>'
			+ '<td>' + this.trukme_val + '</td>'
			+ '<td><input type="button" class="trinti" value="trinti">'
			+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
			;
		this.res_eilute += '</tr>';
		return this.res_eilute;
	}
	parametraiRedagavimui (){
		this.parametraiRed = "";
		this.parametraiRed += "id=" + this.id
		+ "&pav="  + this.pav
		+ "&apras=" + this.apras
		+ "&flagPoilsines=" + this.flag_poilsines
		+ "&flagPazintines=" + this.flag_pazintines
		+ "&flagViskasIsk=" + this.flag_viskas_isk
		+ "&kaina=" + this.kaina
		+ "&trukmeVal=" + this.trukme_val;
		return this.parametraiRed;
	}
	parametraiTrynimui (){
		this.parametraiTryn = "";
		this.parametraiTryn += "id=" + this.id;
		return this.parametraiTryn;
	}
	
	addKelione() {

		alert ( "Saugoma /ajax/saugoti-kelione?" + this.parametraiRedagavimui());
			
		$.ajax(
			 "/ajax/saugoti-kelione?" + this.parametraiRedagavimui()
			)

		.done( function( data ) {

		});
	}
}