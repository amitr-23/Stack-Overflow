import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import '../../App.css'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagslist = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript)."
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."

    },{
        id: 3,
        tagName: "java",
        tagDesc:  "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. ",

    },{
        id: 4,
        tagName: "c#",
        tagDesc: "C# (pronounced 'see sharp') is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others.",
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP language.",
    },{
        id: 6,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT).",
    },{
        id: 7,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.",
        
        
    },{
        id: 8,
        tagName: "jquery",
        tagDesc: "jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question, and at least jQuery usage-related elements must be in the question.",
    },{
        id: 9,
        tagName: "c++",
        tagDesc: "C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about code (to be) compiled with a C++ compiler. Use a version-specific tag for questions related to a specific standard revision [C++11], [C++14], [C++17], [C++20], or [C++23], etc.",
    },{
        id: 10,
        tagName: "mysql",
        tagDesc: "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. Always specify the exact version of the server in the question. "
    
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword that categorizes your with other, similar question.</p>
            <p className='tags-p'>Using the right makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagslist.map((tag) => (
                      <TagsList tag={tag} key={tagslist.id}/>
                    ))
                }

            </div>
        </div>
        
      
    </div>
  )
}

export default Tags
