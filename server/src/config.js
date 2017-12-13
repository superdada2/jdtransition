export const config = {
  db: {
    database: "jdetransition",
    user: "viziya",
    pass: 'viziya2',
    options: {
      dialect: 'mysql',
      host: 'localhost',
      define: {
        timestamps: false
      }
    }
  }
}
export default config