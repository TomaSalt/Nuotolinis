package mano.kelionesx;

/**
 * Menu klase
 * @author
 * Toma
 */
public enum Menu {

	Miestai("/miestai")
	, Keliones("/keliones")
	, Pradžia("/")
	, Autobusai("/autobusai")
	, Imones("/imones");
	
	private final String itemurl;
	
	Menu( String url ) {
		this.itemurl = url;
	}
	
	public String itemurl() {
		return this.itemurl;
	}
	
}
