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
		var checked1, checked2, checked3, res_eilute ;
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
			+ '<div>' + checked1 + '</div>'
			+ '</td>'
			+ '<td>' 
			+ '<div>' + checked2 + '</div>'
			+ '</td>'
			+ '<td>'
			+ '<div>' + checked3 + '</div>'
			+ '</td>'
			+ '<td>' + this.kaina + '</td>'
			+ '<td>' + this.trukme_val + '</td>'
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
		+ "&flagPoilsines=" + this.flag_poilsines
		+ "&flagPazintines=" + this.flag_pazintines
		+ "&flagViskasIsk=" + this.flag_viskas_isk
		+ "&kaina=" + this.kaina
		+ "&trukmeVal=" + this.trukme_val;
		return parametrai;
	}
	parametraiTrynimui (){
		var parametrai =	"id=" + this.id;
		return parametrai;
	}
	
	/*findform (){
		var form = dialog.find( 'form' ).on ("submit", function(event){
			event.preventDefault();
			addKelione();
		});
		return form;
	}*/

	addKelione(duomenys) {
		alert ( 'Saugoma ' );

		alert ( "/ajax/saugoti-kelione?" + duomenys);
			
		$.ajax(
			 "/ajax/saugoti-kelione?" + duomenys
			)

		.done( function( data ) {
			
			dialog.dialog ("close");

		});
	}
}