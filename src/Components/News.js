import React, { useEffect,useState } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 const News =(props)=> {
  const [articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
   const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    
    
    const updateNews=async()=>{
      console.log("crm");
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f8cbb621f614427b4cba669ffa00170&page=1&pageSize=${props.pageSize}`;
      
      let data=await fetch(url);
      let parsedData=await data.json()
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      
    }
    useEffect(() =>{
      updateNews();
    },[])
     

    const handleNext=async()=>{
      
      setPage(page+1)
      updateNews();
   }
 
  const handlePrevious=async()=>{
  
  setPage(page-1)
  updateNews();
   }
   const fetchMoreData = async() => {
   
   setPage(page+1)
   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f8cbb621f614427b4cba669ffa00170&page=${page+1}&pageSize=${props.pageSize}`;
   
   setPage(page+1)
   let data=await fetch(url);
   let parsedData=await data.json()
   console.log(parsedData);
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
 
  };
  
    return (
      
      <>

        <h2 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>NewsFetch-Top Headlines   on {capitalizeFirstLetter(props.category)} News</h2>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner />}
        >
          <div className='container my-3'>
      <div className='row'>
        {articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title?element.title:" "} description={element.description?element.description:""} imageUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
        })}
      </div>
      </div>
      
      </InfiniteScroll>
     </>
      
      

    )
    
  }
  News.defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  News.propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number, 
    category: Proptypes.string,
  }

export default News;