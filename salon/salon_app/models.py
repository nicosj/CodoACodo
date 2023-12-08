from django.db import models

# Create your models here.
from django.db.models import Model

class Cliente(Model):

    nombre = models.CharField(max_length=100, default="no_nombre")
    email = models.EmailField(max_length=100, default="no_contact@mail.com")
    telefono = models.CharField(max_length=20, blank=False, null=False)
    fecha_creacion = models.DateTimeField(auto_now=True)
  
    
    # podemos crear la tabla con un nombre especifico pero se lo tenemos
    # que indicar directamente en la metaclase

    class Meta:
       db_table = "clientes_salon"


    def __str__(self):
        return f"El nombre de la tienda: {self.nombre} rubro: {self.rubro}"

    def get_fields(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]


# -> Next registrar modelo admin.py





class Cliente(models.Model):
   

    def __str__(self):
        return f"Cliente: {self.nombre}"

class Evento(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    fecha = models.DateField()
    # Otros campos relacionados con eventos

    def __str__(self):
        return f"Evento: {self.nombre}"

class Reserva(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE)
    fecha_reserva = models.DateField()
    # Otros campos relacionados con la reserva

    def __str__(self):
        return f"Reserva para {self.evento} de {self.cliente}"