
package reto3.reto3;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author juanp
 */
@Repository
public class RepositorioMensaje {
    @Autowired
    private InterfaceMensaje crud3;
    
    public List<Mensaje> getAll(){
        return (List<Mensaje>) crud3.findAll();
    }
    
    public Optional<Mensaje> getMensaje(int id){
        return crud3.findById(id);
    }
    
    public Mensaje save(Mensaje mensaje){
        return crud3.save(mensaje);
    }
    
    public void delete(Mensaje mensaje){
        crud3.delete(mensaje);
    }
}
