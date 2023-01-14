import React, { useEffect, useState } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Plan(): React.ReactElement {
    const {data, error} = useSWR('/api/plan', fetcher);
    if (!data || error) {
      return <div>Loading...</div>
    }
    return <div className="text-red-100 bg-black">{data?.plan}</div>
  }
  
export default Plan;