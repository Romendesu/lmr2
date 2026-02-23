import styles from './styles/RegionFilter.module.css';
import ping from '../../assets/icons/ping.svg';

export default function RegionFilter () {
  const regions = [
    { name: "Andalucía", count: 1 },
    { name: "Aragón", count: null },
    { name: "Asturias", count: null },
    { name: "Baleares", count: null },
    { name: "Canarias", count: null },
    { name: "Cantabria", count: null },
    { name: "Castilla y León", count: null },
    { name: "Castilla-La Mancha", count: null },
    { name: "Cataluña", count: null },
    { name: "Comunidad Valenciana", count: null },
    { name: "Extremadura", count: null },
    { name: "Galicia", count: null },
    { name: "Madrid", count: null },
    { name: "Murcia", count: null },
    { name: "Navarra", count: null },
    { name: "País Vasco", count: null },
    { name: "La Rioja", count: null },
    { name: "Ceuta", count: null },
    { name: "Melilla", count: null }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img 
            src={ping}
        />
        <span className={styles.title}>Filtrar por comunidad</span>
      </div>

      <div className={styles.list}>
        {regions.map((reg, index) => (
          <div key={index} className={styles.chip}>
            {reg.name}
            {reg.count && <span className={styles.badge}>{reg.count}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};