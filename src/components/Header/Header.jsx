  import React from 'react';
  import styles from './Header.module.css';
  import { Search, Bell, Plus, Smile } from 'lucide-react'; // Assuming Lucide React for icons

  const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.searchContainer}>

          {/* Search Icon (initially) or Input */}
          <Search size={20} className={styles.searchIcon} />
          {/* Could add an input field here later if search is interactive */}
          <input type="text" placeholder="Search" className={styles.searchInput} />

          <div className={styles.notificationIcon}>
            <Bell size={20} fill='#1f349c' />
          </div>

        </div>

        <div className={styles.userInfo}>

          {/* User Avatar and Name */}
          <div className={styles.user}>
            {/* Replace with actual avatar image */}
          <Smile size={20}  />
          </div>

          {/* Add Button */}
          <button className={styles.addButton}>
            <Plus size={20} />
          </button>
        </div>
      </header>
    );
  };

  export default Header;
