      let categories = `CREATE TABLE IF NOT EXISTS categories(
                            id          INTEGER PRIMARY KEY AUTOINCREMENT,
                            name        TEXT NOT NULL,
                            created_at  INTEGER NOT NULL,
                            description TEXT
                        );`;
        let lists = `CREATE TABLE IF NOT EXISTS lists(
                            id           INTEGER PRIMARY KEY AUTOINCREMENT,
                            name         TEXT NOT NULL,
                            _order        INTEGER NOT NULL,
                            created_at   INTEGER NOT NULL,
                            completed_at INTEGER,
                            category_id  INTEGER NOT NULL,
                            FOREIGN KEY(category_id) REFERENCES categories(id)
                        );`;
        let tasks = `CREATE TABLE IF NOT EXISTS tasks(
                            id            INTEGER PRIMARY KEY AUTOINCREMENT, 
                            name          TEXT NOT NULL,
                            description   TEXT,
                            _order         INTEGER NOT NULL,
                            list_id       INTEGER NOT NULL,
                            FOREIGN KEY(list_id) REFERENCES lists(id)
                        );`;
export {
    categories,
    lists,
    tasks
}