package com.itheima.utils;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.util.Properties;

/**
 * Jedis工具类
 * 1. 初始化连接池
 * 2. 通过方法获取连接
 */
public class JedisUtils {
    private static int maxTotal;
    private static int maxIdle;
    private static int port;
    private static String host;
    private static JedisPool pool;

    static {
        try {
            // 1. 加载配置文件
            Properties prop = new Properties();
            prop.load(JedisUtils.class.getClassLoader().getResourceAsStream("jedis.properties"));

            maxTotal = Integer.parseInt(prop.getProperty("maxTotal"));
            maxIdle = Integer.parseInt(prop.getProperty("maxIdle"));
            port = Integer.parseInt(prop.getProperty("port"));
            host = prop.getProperty("host");

            // 2. 初始化连接池
            //2.1 创建连接配置对象
            JedisPoolConfig config = new JedisPoolConfig();
            config.setMaxTotal(maxTotal);
            config.setMaxIdle(maxIdle);

            //2.2 创建连接池
            pool = new JedisPool(config, host, port);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //通过方法获取连接
    public static Jedis getJedis() {
        return pool.getResource();
    }

}
