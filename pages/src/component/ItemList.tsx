import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList(props: any) {
  const { list } = props;

  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list && list.map((item: any, i: number) => {
            return (
              <Grid.Column key={i}>
                {/* href는 실제 이동하는 경로이고 as는 브라우저 표시되는 주소이다.  */}
                <Link href="/detail/[postId]" as={`/detail/${item.id}`}>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category}
                      {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}
