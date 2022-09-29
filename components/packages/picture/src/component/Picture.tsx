import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

export interface PictureProps {
  children: React.ReactNode[];
  className?: string;
}

/**
 * Lazily loaded picture component
 * @param {ReactNode} children - This is the list of elements in the picture HTML tag (<source> & <img>).
 * @param {string} className - The class name of the component.
*/

const Picture = ({
  children,
  className
}: PictureProps): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const processedChildren = React.useMemo(() => {
    if (inView) return children;
    
    return children.map((child: any, index: number) => {
      const { src, srcSet, alt } = child.props;
      const key = `${child.type.toString()}-${index}`;
      
      return child.props.src ? (
        <child.type data-src={src} alt={alt} key={key} />
      ) : (
        <child.type data-srcset={srcSet} alt={alt} key={key} />
      );

    });
  }, [inView, children]);

  return (
    <StyleWrapper
      data-testid="picture"
      className={className}
      ref={ref}
    >
      {processedChildren}
    </StyleWrapper>
  );
};

const StyleWrapper = styled.picture`
  display: inline-block;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    display: none;
  }

  img[src] {
    display: block;
    width: 100%;
    animation: fade-in 1s ease;
  }
`;

export default React.memo(Picture);