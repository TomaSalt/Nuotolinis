package mano.kelionesx;

import org.springframework.data.repository.CrudRepository;
/**
 * Duomenu bazes lenteles <i>imones</i> JPA repositorija
 * 
 * @see <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html">JPA repositorija</a>
 * {@link Imones}
 * @author Toma
 *
 */
public interface ImonesRepository extends CrudRepository<Imones,Integer>{

}
