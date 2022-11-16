class Config {
  public port = 3200;
  public mySQLhost = "localhost";
  public mySQLUser = "root";
  public mySQLPassword = "12345678";
  public mySqlDB = "donations";
}

const config = new Config();
export default config;
