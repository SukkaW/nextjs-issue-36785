import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.text());

export default function Index() {
  return <div>{`Cookie Resp`}</div>;
}
