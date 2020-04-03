$(document).ready ( function() {
		var id_miesto
			, pav_miesto
			, miesto_salies_kodas
			, apras_miesto;
	
		pasiimtiMiestus();
	
		function keistiBusena( id, busena) {
			params_str = 'id=' + id_miesto; 
			if (busena == 'trinti'){
				$.ajax('/ajax/salinti-miesta?' + params_str)
				.done( function( data ) {
				
					alert ( data );
					pasiimtiMiestus();
				});
			}
			if (busena == 'redaguoti'){
				$('#id').val(id_miesto);
				$( '#pav' ).val(pav_miesto);
				$('#kodas_salies').val(miesto_salies_kodas);
				$( '#apras' ).val(apras_miesto);
			}

		
		}
		
		function pasiimtiMiestus() {
			
			alert ("Miestu sarasas");
		
			$.ajax( '/ajax/lst-miestai' 
				
					 
															/*
															, beforeSend: function( xhr ) {
																xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
															}
															*/
				
			)
			.done(
					function( data ) {
															// alert ( 'jquery ok ' + data );
						res_str = '<table>'
								+ '<tr><th rowspan="1">id</th><th rowspan="1">pav</th><th rowspan="1">salies kodas</th><th rowspan="1">apras</th><th>veiksmai</th></tr>';
						
						for ( i = 0; i < data.length; i++) {
						
							res_str += '<tr data-id="' + data [ i ].id  + '" data-pav="' + data [ i ].pav + '" data-kodas_salies="' + data [ i ].kodas_salies +'" data-apras="' + data [ i ].apras + '">'
								+ '<td>' + data [ i ].id + '</td>' 
								+ '<td>' + data [ i ].pav + '</td>'
								+ '<td>' + data [ i ].kodas_salies + '</td>'
								+ '<td>' + data [ i ].apras + '</td>'
								+ '<td><input type="button" class="trinti" value="trinti">'
								+ '<input type="button" class="redaguoti" value="redaguoti"></td>'
								;

							res_str += '</tr>';
						}
						
						res_str += '</table>'
						$( '#miestai' ).html ( res_str );
						
						$( '.trinti' ).on ( 'click', function() {
						
							$( this ).each ( function() {
								
								id_miesto = $( this ).parent( ).parent().data ( 'id' );

								keistiBusena ( id_miesto, 'trinti' );
							});
						});
						
						$( '.redaguoti' ).on ( 'click', function() {
						
							$( this ).each ( function() {
								
								id_miesto = $( this ).parent( ).parent().data ( 'id' );
								pav_miesto = $( this ).parent().parent().data ('pav');
								miesto_salies_kodas = $( this ).parent().parent().data ('kodas_salies');
								apras_miesto = $( this ).parent().parent().data ('apras');

								keistiBusena ( id_miesto, 'redaguoti' );
							});
						});
					}
			);		
		}
		
		$( '#saugoti_miesta' ).click( function() {
		
			alert ( 'Saugojimo lentele ' );
		
			naujas_miestas = {
				id: $('#id').val()
				, pav: $( '#pav' ).val()
				, kodas_salies: $('#kodas_salies').val()
				, apras:  $( '#apras' ).val() 
				
			}
			
			// alert ( 'miestas ' + miestas.pav + ' ' );
			
			params_str = 
				"id=" + naujas_miestas.id
				+ "&pav="  + naujas_miestas.pav
				+ "&kodas_salies=" + naujas_miestas.kodas_salies
				+ "&apras=" + naujas_miestas.apras
	
				
			alert ( "/ajax/saugoti-miesta?" + params_str );
				
			$.ajax(
				 "/ajax/saugoti-miesta?" + params_str
				)

			.done( function( data ) {
				
				alert ( data );
				pasiimtiMiestus();
				$('#id').val('0');
				$( '#pav' ).val('');
				$('#kodas_salies').val('');
				$( '#apras' ).val('');
			});
		} );
	});