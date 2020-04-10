class CrudKelione {
		
	constructor ( kelione ) {
		this.id = kelione.id;
		this.pav = kelione.pav;
		this.apras = kelione.apras; 
		this.flag_poilsines = kelione.flag_poilsines; 
		this.flag_pazintines = kelione.flag_pazintines;
		this.flag_viskas_isk = kelione.flag_viskas_isk;
		this.kaina = kelione.kaina;
		this.trukme_val = kelione.trukme_val;
	}
	void keistiBusena(busena) {
		params_str = 'id=' + this.id;
		if (busena == 'trinti'){
			$('#pav_keliones').val(this.pav);
			trintidialog.dialog( "open" );				
		}
		if (busena == 'redaguoti'){
			
			$( '#pav_veiksmo' ).html ( 'Redaguojamas irasas' );
			$('#id').val(this.id);
			$( '#pav' ).val(this.pav);
			$( '#apras' ).val(this.apras);
			$( '#kaina' ).val(this.kaina);
			$( '#trukmeVal' ).val(this.trukme_val);
			if ( this.flag_poilsines == 1){
				alert("flag poilsines pazymeti");
				$("#flagPoilsines").prop('checked', true);
			} else {
				$("#flagPoilsines").prop('checked', false);
			}
			if ( this.flag_pazintines == 1){
				alert("flag pazintines pazymeti");
				$("#flagPazintines").prop('checked', true);
			} else {
				$("#flagPazintines").prop('checked', false);
			}
			if ( this.flag_viskas_isk == 1){
				alert("flag viskas iskaiciuota pazymeti");
				$("#flagViskasIsk").prop('checked', true);
			} else {
				$("#flagViskasIsk").prop('checked', false);
			}
			dialog.dialog( "open" );
			
		}
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
	parametraiAjaxui (){
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
}