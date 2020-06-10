import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Card } from 'react-native-elements';

export interface IJobItemSkeletonProps {}

export default function JobItemSkeleton({}: IJobItemSkeletonProps) {
  return (
    <Card>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          marginVertical={styleValues.defaultMarginVertical}
          width={150}
          height={styleValues.defaultHeight}
          borderRadius={styleValues.defaultBorderRadius}
        />
        <SkeletonPlaceholder.Item
          marginVertical={styleValues.defaultMarginVertical}>
          <SkeletonPlaceholder.Item
            marginVertical={styleValues.defaultMarginVertical}
            width="100%"
            height={50}
            borderRadius={styleValues.defaultBorderRadius}
          />
          <SkeletonPlaceholder.Item
            width="70%"
            height={styleValues.defaultHeight}
            marginVertical={styleValues.defaultMarginVertical}
            borderRadius={styleValues.defaultBorderRadius}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginVertical={styleValues.defaultMarginVertical}
          width="50%"
          height={styleValues.defaultHeight}
          borderRadius={styleValues.defaultBorderRadius}
        />
      </SkeletonPlaceholder>
    </Card>
  );
}

const styleValues = {
  defaultMarginVertical: 5,
  defaultHeight: 30,
  defaultBorderRadius: 8
};
