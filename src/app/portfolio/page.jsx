"use client";
import React, {useState, useEffect} from 'react';
import data from '../assets/data/portfolioData';

const page = () => {
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  console.log(portfolios)
  
  useEffect(() => {

    if(selectTab === 'all') {
      setPortfolios(data)
    }

    if(selectTab === 'Web Design') {
      const filteredData = data.filter(item => item.category ==='Web Design')
      setPortfolios(filteredData)
    }

    if(selectTab === 'Ux') {
      const filteredData = data.filter(item => item.category ==='Ux')
      setPortfolios(filteredData)
    }
  }, [selectTab])

  return (
    <div style={{ marginTop: "140px" }}>page</div>
  )
}

export default page