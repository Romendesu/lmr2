import styles from './styles/SearchBar.module.css';

export default function SearchBar () {
  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        {/* Icono de Lupa SVG */}
        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Buscar por nombre, ciudad o provincia..."
          className={styles.input}
        />
      </div>

      <div className={styles.filtersWrapper}>
        <div className={styles.fakeSelect}>
          <span>Todos los precios</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>

        <div className={styles.fakeSelect}>
          <span>Más recientes</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
