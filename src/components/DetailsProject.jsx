import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const DetailsProject = ({ project }) => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <Container
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <Header>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
      </Header>
      <Description
        as={motion.p}
        variants={itemVariants}
      >
        {project.description}
      </Description>
      <TechStack>
        {project.technologies.map((tech, index) => (
          <TechItem
            key={index}
            as={motion.span}
            variants={itemVariants}
            custom={index}
          >
            {tech}
          </TechItem>
        ))}
      </TechStack>
      <Links>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </Link>
        )}
        {project.liveDemo && (
          <Link
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </Link>
        )}
      </Links>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default DetailsProject;