class Kelione {
	
	constructor ( kelione ) {
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
		var checked1, checked2, checked3, res_eilute;
		if (this.flag_poilsines == 1){
			checked1 = "&check;";
		} else {
			checked1 = "&cross;";
		}
		if (this.flag_pazintines == 1){
			checked2 = "&check;";
		} else {
			checked2 = "&cross;";
		}
		if (this.flag_viskas_isk == 1){
			checked3 = "&check;";
		} else {
			checked3 = "&cross;";
		}
		res_eilute = '<tr data-id="' + this.id  
			+ '" data-pav="' + this.pav 
			+ '" data-apras="' + this.apras 
			+ '" data-flagpoilsines="' + this.flagPoilsines 
			+ '" data-flagpazintines="' + this.flagPazintines 
			+ '" data-flagviskasisk="' + this.flagViskasIsk
			+ '" data-kaina="' + this.kaina 
			+ '" data-trukmeval="' + this.trukmeVal 
			+ '">'
			+ '<td>' + this.id + '</td>' 
			+ '<td>' + this.pav + '</td>'
			+ '<td>' + this.apras + '</td>'
			+ '<td>'
			+ '<div>' + checked1 + '</div>'
			+ '</td>'
			+ '<td>' 
			+ '<div>' + checked2 + '</div>'
			+ '</td>'
			+ '<td>'
			+ '<div>' + checked3 + '</div>'
			+ '</td>'
			+ '<td>' + this.kaina + '</td>'
			+ '<td>' + this.trukmeVal + '</td>'
			+ '<td><input type="button" class="trinti" value="trinti">'
			+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
			;
		res_eilute += '</tr>';
		return res_eilute;
	}
	parametraiRedagavimui (){
		var parametrai =
		"id=" + this.id
		+ "&pav="  + this.pav
		+ "&apras=" + this.apras
		+ "&flagPoilsines=" + this.flagPoilsines
		+ "&flagPazintines=" + this.flagPazintines
		+ "&flagViskasIsk=" + this.flagViskasIsk
		+ "&kaina=" + this.kaina
		+ "&trukmeVal=" + this.trukmeVal
		return parametrai;
	}
	parametraiTrynimui (){
		var parametrai =	"id=" + this.id;
		return parametrai;
	}
	
	findform (){
		var form = dialog.find( 'form' ).on ("submit", function(event){
			event.preventDefault();
			addKelione();
		});
		return form;
	}

	addKelione() {
			
		alert ( 'Saugoma ' );


		alert ( "/ajax/saugoti-kelione?" + parametraiRedagavimui () );
			
		$.ajax(
			 "/ajax/saugoti-kelione?" + parametraiRedagavimui ()
			)

		.done( function( data ) {
			
			dialog.dialog ("close");

		});
	}
}