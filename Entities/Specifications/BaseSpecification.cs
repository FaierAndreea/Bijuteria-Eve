using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Entities.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {
        }

        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public Expression<Func<T, bool>> Criteria {get;}

        public List<Expression<Func<T, object>>> Includes {get;} = new List<Expression<Func<T, object>>>() ;

        public Expression<Func<T, object>> OrderBy {get; private set;}

        public Expression<Func<T, object>> OrderByDescending {get; private set;}

        protected void AddInclude(Expression<Func<T, object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }

        protected void AddOrderBy(Expression<Func<T, object>> orderByExpresion)
        {
            OrderBy = orderByExpresion;
        }
        protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescExpresion)
        {
            OrderByDescending = orderByDescExpresion;
        }
        public int Take {get; private set;}

        public int Skip {get; private set;}

        public bool IsPaginetingEnabled {get; private set;}
        protected void ApplyPaging(int skip, int take)
        {
            Skip=skip;
            Take=take;
            IsPaginetingEnabled=true;
        }
    }
}