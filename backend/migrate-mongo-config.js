const config = {
  mongodb: {
    url: process.env.MONGO_URL,
    options: {}
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'esm',
};

export default config;
