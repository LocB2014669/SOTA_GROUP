<?php

//Database connection config

class  Connect extends PDO
{

    public function __construct()
    {
        $config = array(
            'db_hostname' => 'localhost',
            'db_name' => 'database_example',
            'db_username' => 'root',
            'db_password' => '',
        );

        parent::__construct(
            "mysql:host=" . $config['db_hostname'] . ";dbname=" . $config['db_name'],
            $config['db_username'],
            $config['db_password'],
            array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
        );
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    }
}
