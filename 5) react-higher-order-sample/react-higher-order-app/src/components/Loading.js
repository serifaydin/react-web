import React from 'react'

const LoadingHOC = (FieldName,SubComponent) => {
    return class Loading extends React.Component{

        isEmpty(field){
            return(
                field === undefined || field === null 
            )
        }

        render(){
          return this.isEmpty(this.props[FieldName])? <div>Yükleniyor</div>:<SubComponent {...this.props}/>
        }

    }
}

export default LoadingHOC;