# Importar configuracion
import configparser

config = configparser.ConfigParser()
config.read("database/database.ini")  

def get_db_config(db="postgresql"):
    # Devuelve un diccionario con la configuración de la DB
    params = config[db]
    return params