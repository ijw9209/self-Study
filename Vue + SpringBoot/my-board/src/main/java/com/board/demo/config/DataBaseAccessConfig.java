package com.board.demo.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

/*
 * config 패키지에 DataAccessConfig.java 클래스 파일을 생성합니다.
   마이바티스 사용을 위해 SqlSessionFactoryBean를 생성하기 위한 클래스입니다.
  마이바티스 역시 다른 방법으로의 연동도 가능하지만 보다 편리한 유지보수를 위해 클래스 파일로 분리하겠습니다. (without *.xml 방식)
 * 
 */

@Configuration
@MapperScan(basePackages = "com.board.demo.model.dao")
public class DataBaseAccessConfig {
	
	@Bean(name ="oracleSqlSessionFactory")
	@Primary
	public SqlSessionFactory sqlSessionFactory(@Autowired @Qualifier("oracleDataSource")DataSource datasource) throws Exception {
		
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		
		sessionFactory.setDataSource(datasource);
		sessionFactory.setConfigLocation(new PathMatchingResourcePatternResolver().getResource("classpath:config.xml"));
		sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mapper/*.xml"));
		return sessionFactory.getObject();
	}
	@Bean(name ="oracleSqlSessionTemplate")
	@Primary
	public SqlSessionTemplate sqlSessionTemplate(@Autowired @Qualifier("oracleSqlSessionFactory")SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}
}
