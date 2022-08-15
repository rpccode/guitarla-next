import style from '../styles/Nosotros.module.css'
import Image from 'next/image'
import Layouts from '../components/Layouts'
const Nosotros = () => {
  return (
    <>

      <Layouts
        pagina='Nosotros'
      >


        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={style.contenido}>

              <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='imagen nosotros'    />

            <div>
              <p>Deserunt exercitation velit cupidatat magna id Lorem et dolore consectetur.
                Magna culpa velit Lorem quis duis magna eu adipisicing.
                Mollit est voluptate quis elit. Nisi magna laboris nulla duis
                enim cupidatat dolor fugiat magna pariatur. Dolore nulla duis nisi
                elit culpa mollit fugiat. Ipsum ad Lorem sit commodo ad eiusmod.
              </p>
              <p>
                Pariatur excepteur dolore culpa ex deserunt aliquip
                tempor fugiat proident. Commodo proident et esse
                dolor officia culpa consectetur deserunt magna est.
                Nostrud ipsum veniam culpa dolor in esse consectetur s
                it dolore cupidatat occaecat tempor. Aute est et cupidatat
                dolore minim adipisicing voluptate proident ad eu fugiat.
                Fugiat exercitation cupidatat in veniam irure mollit fugiat id quis est
                laborum exercitation. Pariatur adipisicing dolor ipsum pariatur laboris.
              </p>
            </div>
          </div>

        </main>


      </Layouts>


    </>
  )
}

export default Nosotros