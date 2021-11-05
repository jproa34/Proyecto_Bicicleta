/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package reto3.reto3;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juanp
 */
@Service
public class ServiciosMensaje {
    @Autowired
    private RepositorioMensaje metodosCrud;
	
    public List<Mensaje> getAll(){
        return metodosCrud.getAll();
    }
	
    public Optional<Mensaje> getMessage(int messageId) {
        return metodosCrud.getMensaje(messageId);
    }
	
    public Mensaje save(Mensaje message){
        if(message.getIdMessage()==null){
            return metodosCrud.save(message);
        }else{
            Optional<Mensaje> e= metodosCrud.getMensaje(message.getIdMessage());
            if(e.isEmpty()){
                return metodosCrud.save(message);
            }else{
                return message;
            }
        }
    }
	
    public Mensaje update(Mensaje message){
        if(message.getIdMessage()!=null){
            Optional<Mensaje> e= metodosCrud.getMensaje(message.getIdMessage());
            if(!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                metodosCrud.save(e.get());
                    return e.get();
                }else{
                    return message;
                }
            }else{
                return message;
            }
        }
    
    public boolean deleteMensaje(int mensajeId) {
        Boolean aBoolean = getMessage(mensajeId).map(mensaje -> {
            metodosCrud.delete(mensaje);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
